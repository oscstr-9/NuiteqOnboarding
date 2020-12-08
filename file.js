﻿const PDFStart = nameRoute => { }
const startPdf = () => {
    PDFStart('../test.pdf')
}
window.addEventListener('load', startPdf);
let loadingTask = pdfjsLib.getDocument(nameRoute),
    pdfDoc = null,
    canvas = document.querySelector('#cnv'),
    ctx = canvas.getContext('2d'),
    scale = 1.5,
    numPage = 1;
loadingTask.promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    document.querySelector('#npages').innerHTML = pdfDoc.numPages;
    GeneratePDF(numPage)
});
const GeneratePDF = numPage => {
    pdfDoc.getPage(numPage).then(page => {
        let viewport = page.getViewport({ scale: scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        let renderContext = {
            canvasContext: ctx, viewport: viewport
        }
        page.render(renderContext);
    })
    document.querySelector('#npages').innerHTML = numPage;
}