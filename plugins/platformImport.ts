import fs from "fs-extra";
import * as path from "path";

type Platform = "gsuite" | "office";

export default function platformImport({ platform }: { platform: Platform }) {
	return {
		name: 'platform-import',

		load(id: string) {
			if (id.includes(".platform.")) {
				const platformFilePath = id.replace(".platform.", `.${platform}.`);
				if (fs.existsSync(platformFilePath)) {
					return fs.readFileSync(platformFilePath, "utf8");
				} else {
					const fileName = path.basename(id);
					const parentFolderName = path.basename(path.dirname(id));
					throw new Error(`No "${platform}" implementation for module ${parentFolderName}/${fileName}`);
				}
			}
		}
	}
}