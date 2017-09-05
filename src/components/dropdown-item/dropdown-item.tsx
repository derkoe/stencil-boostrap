import { Component } from '@stencil/core';

@Component({
  tag: 'dropdown-item',
})
export class DropdownItem {
  render() {
    return <a class="dropdown-item" href="#"><slot></slot></a>;
  }
}
