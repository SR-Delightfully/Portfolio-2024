import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --tone-0: #0F0F0F;
        --tone-1: #202020;
        --tone-2: #303030;
        --tone-3: #484848;
        --tone-4: #606060;
        --tone-5: #909090;
        --tone-6: #B0B0B0;
        --tone-7: #D0D0D0;
        --tone-8: #E0E0E0;
        --tone-9: #F0F0F0;

    }
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }
    html, body {
        max-width: 100vw;
        background-color: var(--tone-7);
    }
    /* http://meyerweb.com/eric/tools/css/reset/
        v2.0 | 20110126
        License: none (public domain)
    */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    body {
        font-family: sans-serif;
        font-size:24px;
        color: var(--tone-0);
    }
  .app {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem;
  }
  /* tones */
  .tone0{
    background-color: var(--tone-0);
  }
  .tone1{
    background-color: var(--tone-1);
  }
  .tone2{
    background-color: var(--tone-3);
  }
  .tone3{
    background-color: var(--tone-3);
  }
  .tone4{
    background-color: var(--tone-4);
  }
  .tone5{
    background-color: var(--tone-5);
  }
  .tone6{
    background-color: var(--tone-6);
  }
  .tone7{
    background-color: var(--tone-7);
  }
  .tone8{
    background-color: var(--tone-8);
  }
  .tone9{
    background-color: var(--tone-9);
  }
`;
