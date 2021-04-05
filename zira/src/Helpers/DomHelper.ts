/* istanbul ignore file */
export default class DomHelper {
    static closeOneModal(modalId: string): void {
        // get modal
        const modal = document.getElementById(modalId);
        if (modal != null) {
            // change state like in hidden modal
            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');
            modal.setAttribute('style', 'display: none');

            // get modal backdrop
            const modalBackdrops = document.getElementsByClassName('modal-backdrop');

            if (modalBackdrops[0] != null) {
                // remove opened modal backdrop
                document.body.removeChild(modalBackdrops[0]);
            }
        }
    }
}
