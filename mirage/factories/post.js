import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    title(i) {
        return `Blog post ${i + 1}`;
    },
    body(i) {
        return `This is the body content for blog post ${i + 1}`;
    }
});
