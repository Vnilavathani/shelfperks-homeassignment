let page = 0;
const content = [
    'Wikipedia ( wik-ih-PEE-dee-ə or wik-ee-) is a free content, multilingual online encyclopedia written and maintained by a community of volunteers through a model of open collaboration, using a wiki-based editing system. Individual contributors, also called editors, are known as Wikipedians.Wikipedia is hosted by the Wikimedia Foundation, a non-profit organization that also hosts a range of other projects.',
    'Wikipedia ( wik-ih-PEE-dee-ə or wik-ee-) is a free content, multilingual online encyclopedia written and maintained by a community of volunteers through a model of open collaboration, using a wiki-based editing system. Individual contributors, also called editors, are known as Wikipedians.Wikipedia is hosted by the Wikimedia Foundation, a non-profit organization that also hosts a range of other projects.',
    'Wikipedia ( wik-ih-PEE-dee-ə or wik-ee-) is a free content, multilingual online encyclopedia written and maintained by a community of volunteers through a model of open collaboration, using a wiki-based editing system. Individual contributors, also called editors, are known as Wikipedians.Wikipedia is hosted by the Wikimedia Foundation, a non-profit organization that also hosts a range of other projects.',
    'Wikipedia ( wik-ih-PEE-dee-ə or wik-ee-) is a free content, multilingual online encyclopedia written and maintained by a community of volunteers through a model of open collaboration, using a wiki-based editing system. Individual contributors, also called editors, are known as Wikipedians.Wikipedia is hosted by the Wikimedia Foundation, a non-profit organization that also hosts a range of other projects.',
    'Wikipedia ( wik-ih-PEE-dee-ə or wik-ee-) is a free content, multilingual online encyclopedia written and maintained by a community of volunteers through a model of open collaboration, using a wiki-based editing system. Individual contributors, also called editors, are known as Wikipedians.Wikipedia is hosted by the Wikimedia Foundation, a non-profit organization that also hosts a range of other projects.',
    'Wikipedia ( wik-ih-PEE-dee-ə or wik-ee-) is a free content, multilingual online encyclopedia written and maintained by a community of volunteers through a model of open collaboration, using a wiki-based editing system. Individual contributors, also called editors, are known as Wikipedians.Wikipedia is hosted by the Wikimedia Foundation, a non-profit organization that also hosts a range of other projects.'
];

const outerContainer = document.getElementsByClassName('outer-container');

const showContent = (content) => {
    content.forEach((data, idx) => {
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('content');

        innerDiv.innerHTML = `
        <span>${idx+(page * content.length) + 1})</span>
        ${data}
    `;

        outerContainer[0].appendChild(innerDiv);
    });
};

const loadContent = () => {
    showContent(content);
    page++;
} 

window.addEventListener('scroll', () => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        loadContent();
    }
}, {
    passive: true
});

loadContent();
