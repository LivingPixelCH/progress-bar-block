import { __ } from "@wordpress/i18n";
import { useEffect, useState, useRef } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit() {
	const [value, setValue] = useState(0);
	const container = useRef(null);

	const id = setInterval(frame, 10);

	function frame() {
		if (value >= 100) {
			clearInterval(id);
			setValue(0);
		} else {
			setValue(value + 1);
			container.current.style.width = `${value}%`;
		}
	}

	return (
		<div
			{...useBlockProps({
				className: "progressbar",
			})}
		>
			<div class="bar" ref={container}></div>
		</div>
	);
}
