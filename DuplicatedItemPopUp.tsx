import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function createExternalRoot(rootElement: HTMLElement) {
    return {
        render(props: any) {
            rootElement.innerHTML = ""; // Clear previous content

            const App = () => {
                const [isPopupVisible, setPopupVisible] = useState(false);
                const [duplicateCount, setDuplicateCount] = useState<number | null>(null);

                useEffect(() => {
                    const duplicateElements = document.querySelectorAll('[data-testid="duplicate"]');
                    
                    if (duplicateElements.length > 0) {
                        setPopupVisible(true);
                        setDuplicateCount(duplicateElements.length);
                    }
                }, []); // Only run once on mount

                const closePopup = () => {
                    setPopupVisible(false);
                };

                return (
                    <div>
                        {isPopupVisible && (
                            <div className="modal fade show" role="dialog" id="duplicate-popup" style={{ display: "block" }}>
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close btn btn-default" onClick={closePopup}>
                                                <span aria-hidden="true">
                                                    <i className="m-icon m-icon-cross"></i>
                                                </span>
                                            </button>
                                            <h3 className="modal-title">Duplicate Entry</h3>
                                        </div>

                                        <div className="modal-body use-type">
                                            <div className="grid__section">
                                                <div className="container">
                                                    <div className="row">
                                                        <div id="sec2row0col0" className="col-12">
                                                            <div id="mHtmlComponent_4ae0jtsaSL6r4Bo-DzjR-A">
                                                                <div className="htmlSanitizer">
                                                                    {duplicateCount && duplicateCount > 1 ? (
                                                                        <p>
                                                                            <span style={{ fontSize: "24px" }}>
                                                                                There are {duplicateCount} duplicate items. Please review them.
                                                                            </span>
                                                                        </p>
                                                                    ) : (
                                                                        <p>
                                                                            <span style={{ fontSize: "24px" }}>
                                                                                You have a duplicate entry.
                                                                            </span>
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary" onClick={closePopup}>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            };

            const root = document.createElement("div");
            rootElement.appendChild(root);
            ReactDOM.render(<App />, root);
        },
        unmount() {
            rootElement.innerHTML = "";
        },
    };
}
