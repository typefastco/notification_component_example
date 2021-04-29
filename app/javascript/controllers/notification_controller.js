import { Controller } from 'stimulus';

export default class extends Controller {
  connect() {
    if (!this.isPreview) {
      setTimeout(() => {
        this.element.classList.remove('hidden');
        this.element.classList.add('transform', 'ease-out', 'duration-300', 'transition', 'translation-y-2', 'opacity-0', 'sm:translate-y-0', 'sm:translate-x-2');

        setTimeout(() => {
          this.element.classList.add('translate-y-0', 'opacity-100', 'sm:translate-x-0');
        }, 100);
      }, 500);
    }

    // Auto-hide
    setTimeout(() => {
      this.close();
    }, 5000);
  }

  close() {
    // Remove with transition
    this.element.classList.remove('transform', 'ease-out', 'duration-300', 'translate-y-2', 'opacity-0', 'sm:translate-y-0', 'sm:translate-x-2', 'translate-y-0', 'sm:translate-x-0');
    this.element.classList.add('ease-in', 'duration-100');

    // Trigger transition
    setTimeout(() => {
      this.element.classList.add('opacity-y-0');
    }, 100);

    // Remove element after transition
    setTimeout(() => {
      this.element.remove();
    }, 300);
  }

  get isPreview() {
    return document.documentElement.hasAttribute('data-turbolinks-preview');
  }
}
