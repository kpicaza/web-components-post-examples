import {LitElement, html, css} from 'lit';

export class WordCountParagraph extends LitElement {

    static styles = css`
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

    render() {
        return html`
            <span class="wrapper">
                <p><slot></slot></p>
                <small class="word-count">${this.countWords(this.textContent)} words</small>
            </span>
        `
    }

    countWords(str) {
        const arr = str.split(' ')

        return arr.filter(word => word !== '').length
    }
}

customElements.define('word-count-p', WordCountParagraph);
