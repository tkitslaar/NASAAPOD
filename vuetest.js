import { shallowMount } from '@vue/test-utils';
import MyComponent from '../src/components/MyComponent.vue';

describe('MyComponent', () => {
    it('renders correctly', () => {
        const wrapper = shallowMount(MyComponent);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('displays the correct framework name', () => {
        const wrapper = shallowMount(MyComponent);
        expect(wrapper.find('.test').text()).toEqual('This is a Vue template');
    });

    it('renders a primary pfe-cta', () => {
        const wrapper = shallowMount(MyComponent);
        expect(wrapper.find('pfe-cta[priority="primary"]').exists()).toBe(true);
    });

    it('renders a secondary pfe-cta with a "wind" variant', () => {
        const wrapper = shallowMount(MyComponent);
        expect(wrapper.find('pfe-cta[priority="secondary"][variant="wind"]').exists()).toBe(true);
    });

    it('renders a pfe-cta with the correct link', () => {
        const wrapper = shallowMount(MyComponent);
        const link = wrapper.find('pfe-cta a[href="https://github.com/"]');
        expect(link.exists()).toBe(true);
        expect(link.text()).toEqual('GitHub');
    });

    it('renders a pfe-card with the correct header and footer', () => {
        const wrapper = shallowMount(MyComponent);
        const header = wrapper.find('pfe-card h2[slot="header"]');
        const footer = wrapper.find('pfe-card p[slot="footer"]');
        expect(header.exists()).toBe(true);
        expect(header.text()).toEqual('Card header');
        expect(footer.exists()).toBe(true);
        expect(footer.text()).toEqual('This is the footer');
    });
});
