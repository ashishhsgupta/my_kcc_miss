export const GenericInput = (props) => {
  const {
    label,
    type,
    name,
    value,
    onChange,
    error,
    placeholder,
    options = [],
    required,
    maxLength,
    inputMode,
  } = props;

  return (
    <div className="mb-3">
      <label className="form-label fw-semibold">
        {label}
        {required && <span className="text-danger ms-1">*</span>}
      </label>
      {type === "select" ? (
        <select
          className={`form-select ${error ? "is-invalid" : ""}`}
          name={name}
          value={value}
          onChange={onChange}
          required={true}
        >
          <option value="" disabled>
            Select {label}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          inputMode={inputMode}
          className={`form-control bg-light ${error ? "is-invalid" : ""}`}
        />
      )}

      {error ? <div className="invalid-feedback d-block">{error}</div> : null}
    </div>
  );
};
