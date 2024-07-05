import { convertLabel } from "../../util/format";

export function TextArea(props) {
    return (
        <div className="w-full flex flex-col gap-2">
            <label
                htmlFor={props.id}
                className="text-sm text-dark"
            >
                {props.label}{props.required ? " *" : ""}
            </label>
            <textarea
                name={convertLabel(props.label)}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
                required={props.required}
                placeholder={props.placeholder}
                rows={props.rows || 4} 
                style={{ resize: 'none' }}
                className="w-full text-sm rounded-lg border-zinc-300 disabled:opacity-75 disabled:bg-neutral-200/60 placeholder:text-muted focus:outline-none focus:border-neutral-400 focus:ring-neutral-400 focus:ring-0 h-[150px]"
            />
        </div>
    );
}