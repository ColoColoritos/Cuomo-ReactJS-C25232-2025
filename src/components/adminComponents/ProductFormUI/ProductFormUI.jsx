import "./ProductFormUI.css";
import { Link } from "react-router-dom";

export const ProductFormUI = ({product, errors, loading, onChange, onFileChange, onSubmit}) => {
    return (
        <section className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-9">
                    <form className="p-4 p-md-5 rounded-4 shadow-sm pastel-form-card" onSubmit={onSubmit}>
                        <h2 className="text-center mb-4 fs-3 fw-bold text-dark-charcoal">Agregar Nuevo Producto</h2>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label fw-semibold text-dark-charcoal">Nombre:</label>
                            <input 
                                type="text" 
                                className={`form-control pastel-form-control ${errors.name ? 'is-invalid' : ''}`} 
                                id="name" 
                                name="name" 
                                value={product.name} 
                                onChange={onChange} 
                                required
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label fw-semibold text-dark-charcoal">Precio:</label>
                            <input 
                                type="number" 
                                className={`form-control pastel-form-control ${errors.price ? 'is-invalid' : ''}`} 
                                id="price" 
                                name="price" 
                                value={product.price === "" ? "" : product.price}
                                onChange={onChange} 
                                min={1} 
                                required
                            />
                            {errors.price && <div className="invalid-feedback">{errors.price}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label fw-semibold text-dark-charcoal">Categoría:</label>
                            <input 
                                type="text" 
                                className={`form-control pastel-form-control ${errors.category ? 'is-invalid' : ''}`} 
                                id="category" 
                                name="category" 
                                value={product.category} 
                                onChange={onChange} 
                                required
                            />
                            {errors.category && <div className="invalid-feedback">{errors.category}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label fw-semibold text-dark-charcoal">Descripción:</label>
                            <textarea 
                                className={`form-control pastel-form-control ${errors.description ? 'is-invalid' : ''}`} 
                                id="description" 
                                name="description" 
                                value={product.description} 
                                onChange={onChange} 
                                rows="3"
                                required
                            ></textarea>
                            {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="file" className="form-label fw-semibold text-dark-charcoal">Subir Imagen:</label>
                            <input 
                                type="file" 
                                className={`form-control pastel-form-control ${errors.file ? 'is-invalid' : ''}`} 
                                id="file" 
                                accept="image/*" 
                                onChange={(e) => onFileChange(e.target.files?.[0] ?? null)} 
                                required
                            />
                            {errors.file && <div className="invalid-feedback">{errors.file}</div>}
                        </div>
                        <div className="d-grid gap-2">
                            <button 
                                className="btn btn-pastel-primary btn-lg" 
                                type="submit" 
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Guardando...
                                    </>
                                ) : (
                                    "Guardar Producto"
                                )}
                            </button>
                            <Link to="/admin" className="btn btn-pastel-secondary btn-lg">Cancelar</Link>
                        </div>
                        {errors.general && <div className="alert alert-danger mt-3 text-center">{errors.general}</div>}
                    </form>
                </div>
            </div>
        </section>
    );
};