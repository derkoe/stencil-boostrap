import { Component, Prop } from '@stencil/core';
import { colors } from '../../utils';

@Component({
  tag: 'bs-progress-bar',
})
export class ProgressBar {

  @Prop() value: number;

  @Prop() striped: boolean;

  @Prop() bg: colors;

  render() {
    return (
      <div class="progress">
        <div role="progressbar" class={this.classString()}
          style={{ width: this.value + '%' }} aria-valuenow={this.value}
          aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    );
  }

  private classString() {
    let classString = 'progress-bar';
    if (this.striped) {
      classString += ' progress-bar-striped';
    }
    if (this.bg) {
      classString += ' bg-' + this.bg;
    }
    return classString;
  }

}
