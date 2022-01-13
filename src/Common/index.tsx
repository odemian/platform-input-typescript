import {FC} from "react";

export const Common: FC = () => {
	return (
		<>
			<p>This component is common for both platforms</p>
			<p>
				Platform input plugin allows switching between different files based on target platform.
				When a file containing <b>.platform.</b> name is requested for load, it will be replaced by a different file, which provides implementation for the target platform.
				Platform is indicated in <b>vite.config.ts</b> file.
			</p>
		</>
	);
}