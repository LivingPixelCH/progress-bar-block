import { __ } from "@wordpress/i18n";
import { useEffect, useState, useRef } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit() {
	const [value, setValue] = useState(0);
	const [max, setMax] = useState(100);

	const container = useRef(null);

	useEffect(() => {
		if (container.current) {
			container.current.style.width = `${value}%`;
		}
	}, [value]);

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
