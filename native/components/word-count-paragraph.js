export default class WordCountParagraph extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const styles = `
            .wrapper {
              border: solid 1px #ccc;
              display: block;
              padding: 5px 25px;
            }
            .word-count {
              position: relative;
              left: 90%;
            }
        `

        this.attachShadow({mode: 'open'})

        // Create (nested) elements
        const wrapper = document.createElement('span')
        wrapper.setAttribute('class', 'wrapper')

        // Append element content
        const Paragraph = wrapper.appendChild(document.createElement('p'))
        Paragraph.append(this.textContent);

        // Append our custom logic
        const wordCount = wrapper.appendChild(document.createElement('small'))
        wordCount.setAttribute('class', 'word-count')
        wordCount.append(this.countWords(this.textContent) + ' words')

        // Create some CSS to apply to the shadow DOM
        const style = document.createElement('style')
        style.textContent = styles

        // attach the created elements to the shadow DOM
        this.shadowRoot.append(style, wrapper)
    }

    countWords(str) {
        const arr = str.split(' ')

        return arr.filter(word => word !== '').length
    }
}
