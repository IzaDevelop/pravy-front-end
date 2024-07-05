import { Eye, EyeSlash } from "@phosphor-icons/react";
import { convertLabel } from "../../util/format";
import { useState } from "react";

export function Password(props) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="w-full flex flex-col gap-2">
             <label
                htmlFor={props.id}
                className="text-sm text-dark"
            >
                {props.label}{props.required ? " *" : ""}
            </label>
            <div className="relative w-full flex flex-col">
                <input
                    type={showPassword ? "text" : "password"}
                    name={convertLabel(props.label)}
                    id={props.id}
                    value={props.value}
                    onChange={props.onChange}
                    disabled={props.disabled}
                    required={props.required}
                    placeholder={props.placeholder}
                    maxLength={15}
                    minLength={6}
                    className="w-full text-sm rounded-lg border-zinc-300 disabled:opacity-75 disabled:bg-neutral-200/60 placeholder:text-muted focus:outline-none focus:border-neutral-400 focus:ring-neutral-400 focus:ring-0"
                />
                <div className="absolute h-full w-12 top-0 right-0">
                    <button
                        type="button"
                        className="w-full h-full flex items-center justify-center"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ?
                            <EyeSlash size={22} />
                            :
                            <Eye size={22} />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}