import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'dropdown-button',
})
export class Dropdown {

  @State() expanded: boolean;

  @Prop() label: string;

  render() {
    return (
      <div class={{ dropdown: true, show: this.expanded }}>
        <button class="btn btn-secondary dropdown-toggle" type="button" aria-haspopup="true"
          aria-expanded={this.expanded}
          onClick={() => this.expanded = !this.expanded}
          onBlur={() => this.expanded = !this.expanded}>
          {this.label}
        </button>
        <div class={{ 'dropdown-menu': true, 'show': this.expanded }}>
          <slot></slot>
        </div>
      </div>
    );
  }
}
