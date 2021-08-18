import React from 'react';

import imagesLoaded from 'imagesloaded';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const PackeryModule = require('packery');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PackeryOptions } = require('packery');

interface PackeryProps {
  options?: typeof PackeryOptions;
  disableImagesLoaded?: boolean;
  className?: string;
}

type DomActions = 'old' | 'new' | 'removed' | 'appended' | 'prepended' | 'moved';
type DomChildrenActions = Record<DomActions, Element[]>;

export default class Packery extends React.Component<PackeryProps> {
  private packery: typeof PackeryModule;

  private domChildren: Array<Element> = [];

  private packeryContainer: React.RefObject<HTMLDivElement> = React.createRef();

  initializePackery(force?: boolean): void {
    if (!this.packery || force) {
      this.packery = new PackeryModule(this.packeryContainer.current, this.props.options);
      this.domChildren = this.getNewDomChildren();
    }
  }

  getNewDomChildren(): Array<Element> {
    const node = this.packeryContainer.current;
    const children = this.props.options.itemSelector ? node?.querySelectorAll(this.props.options.itemSelector) : node?.children;

    return Array.prototype.slice.call(children);
  }

  diffDomChildren(): DomChildrenActions {
    const oldChildren = this.domChildren.filter((element) => {
      /*
       * take only elements attached to DOM
       * (aka the parent is the packery container, not null)
       */
      return !!element.parentNode;
    });

    const newChildren = this.getNewDomChildren();

    const removed = oldChildren.filter((oldChild) => {
      return !~newChildren.indexOf(oldChild);
    });

    const domDiff = newChildren.filter((newChild) => {
      return !~oldChildren.indexOf(newChild);
    });

    let beginningIndex = 0;

    // get everything added to the beginning of the DOMNode list
    const prepended = domDiff.filter((newChild) => {
      const prepend = beginningIndex === newChildren.indexOf(newChild);

      if (prepend) {
        // increase the index
        beginningIndex++;
      }

      return prepend;
    });

    // we assume that everything else is appended
    const appended = domDiff.filter((el) => {
      return prepended.indexOf(el) === -1;
    });

    /*
     * otherwise we reverse it because so we're going through the list picking off the items that
     * have been added at the end of the list. this complex logic is preserved in case it needs to be
     * invoked
     *
     * var endingIndex = newChildren.length - 1;
     *
     * domDiff.reverse().filter(function(newChild, i){
     *     var append = endingIndex == newChildren.indexOf(newChild);
     *
     *     if (append) {
     *         endingIndex--;
     *     }
     *
     *     return append;
     * });
     */

    // get everything added to the end of the DOMNode list
    let moved: Array<Element> = [];

    if (removed.length === 0) {
      moved = oldChildren.filter((child, index) => {
        return index !== newChildren.indexOf(child);
      });
    }

    this.domChildren = newChildren;

    return {
      old: oldChildren,
      new: newChildren,
      removed,
      appended,
      prepended,
      moved,
    };
  }

  performLayout(): void {
    const diff = this.diffDomChildren();

    if (diff.removed.length > 0) {
      this.packery.remove(diff.removed);
      this.packery.reloadItems();
    }

    if (diff.appended.length > 0) {
      this.packery.appended(diff.appended);
      this.packery.reloadItems();
    }

    if (diff.prepended.length > 0) {
      this.packery.prepended(diff.prepended);
    }

    if (diff.moved.length > 0) {
      this.packery.reloadItems();
    }

    this.packery.layout();
  }

  runImagesLoaded(): void {
    if (this.props.disableImagesLoaded) return;

    imagesLoaded(this.packeryContainer.current as ImagesLoaded.ElementSelector, () => {
      this.packery.layout();
    });
  }

  componentDidMount(): void {
    this.initializePackery();
    this.runImagesLoaded();
  }

  componentDidUpdate(): void {
    this.performLayout();
    this.runImagesLoaded();
  }

  render(): JSX.Element {
    return (
      <div ref={this.packeryContainer} className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}
