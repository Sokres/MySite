declare module '*.css' {
	interface IClassNames {
		[className: string]: string;
	}
	const classnames: IClassNames;
	export = classnames;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.svg' {
	import React = require('react');
	const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	export default ReactComponent;
}
declare const __IS_DEV__: boolean;
