import React, { useState, useRef } from 'react'; 
import { pdfjs, Document, Page } from 'react-pdf'; 

//CSS
import '../components/PdfViewer.css';

//PDF.js Worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfViewer = ({ file }) => {

    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1); 
    const pdfContainerRef = useRef(); 
    const currentPageRef = useRef(1); 
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    const handleScroll = () => {
        const container = pdfContainerRef.current;
        const pages = container.querySelectorAll('.pdf-page');
        let currentPage = currentPageRef.current; 

        pages.forEach((page, index) => {
            const rect = page.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight) {
                currentPage = index + 1;
            }
        });

        if (currentPage !== currentPageRef.current) {
            currentPageRef.current = currentPage;
            setPageNumber(currentPage);
        }
    };

    return (
        <div className="pdf-view" ref={pdfContainerRef} onScroll={handleScroll}>
            <span className="page-number">Page {pageNumber} of {numPages}</span>
                <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.apply(null, Array(numPages))
                        .map((x, i) => i + 1)
                        .map((page, index) => {
                            return (
                                <Page
                                    key={index}
                                    pageNumber={page}
                                    className="pdf-page"
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}/>
                                );
                            }       
                        )
                    }
                </Document>
        </div>
    )
}

export default PdfViewer