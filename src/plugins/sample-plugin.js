import { Plugin } from './base.js';
export default class SamplePlugin extends Plugin {
  apply(review) {
    if (review.text.includes('TODO')) {
      review.addIssue({ message: 'Remove TODO comments.' });
    }
  }
}
