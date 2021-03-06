import {isCustom} from './utils';

const Selector = {
    CUT: '.yfm .yfm-cut',
    TITLE: '.yfm .yfm-cut-title',
    CONTENT: '.yfm .yfm-cut-content',
};

const ClassName = {
    OPEN: 'open',
};

function toggleCut(element) {
    const cutEl = element.parentNode;
    cutEl.classList.toggle(ClassName.OPEN);
}

if (typeof document !== 'undefined') {
    document.addEventListener('click', (event) => {
        if (isCustom(event) || !event.target.matches(Selector.TITLE)) {
            return;
        }

        toggleCut(event.target);
    });
}
