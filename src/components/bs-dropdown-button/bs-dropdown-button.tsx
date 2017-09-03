import { Component, State } from '@stencil/core';

@Component({
  tag: 'bs-dropdown-button',
})
export class Dropdown {

  @State() expanded: boolean;

  render() {
    return (
      <div class={{ dropdown: true, show: this.expanded }}>
        <button class="btn btn-secondary dropdown-toggle" type="button" aria-haspopup="true"
          aria-expanded={this.expanded} onClick={() => this.expanded = !this.expanded}>
          <slot></slot>
        </button>
        <div class={{ 'dropdown-menu': true, 'show': this.expanded }}>
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    )
  }
}
