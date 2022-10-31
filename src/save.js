import { useBlockProps } from "@wordpress/block-editor";

export default function save() {
	return (
		<div
			{...useBlockProps.save({
				className: "progressbar",
			})}
		>
			<div class="bar"></div>
		</div>
	);
}
