# Sample project

Created sample project to reproduce issue with react typing.


## Setup

* Clone project from github
* run `npm install`
* run `npm run build`
* Error described below is thrown
* If `skipLibCheck` is set to true in tsconfig.json, error is not thrown as Typescript compiler skips checking all d.ts files.

## Error

```
✘ [ERROR] TS2344: Type '{ ref: (ref: HTMLDivElement | null) => void; onClick: (event: MouseEvent<Element, MouseEvent>) => void; onContextMenu: (event: MouseEvent<Element, MouseEvent>) => void; ... 5 more ...; rowSpan: number | undefined; }' does not satisfy the constraint 'HTMLAttributes<HTMLDivElement> | SVGAttributes<HTMLDivElement>'.
  Type '{ ref: (ref: HTMLDivElement | null) => void; onClick: (event: MouseEvent<Element, MouseEvent>) => void; onContextMenu: (event: MouseEvent<Element, MouseEvent>) => void; ... 5 more ...; rowSpan: number | undefined; }' is not assignable to type 'SVGAttributes<HTMLDivElement>'.
    Types of property 'style' are incompatible.
      Type 'boolean | CSSProperties | undefined' is not assignable to type 'CSSProperties | undefined'.
        Type 'false' has no properties in common with type 'Properties<string | number, string & {}>'. [plugin angular-compiler]

    node_modules/@sisense/sdk-pivot-client/dist/components/Pivot/PivotCell.d.ts:185:31:
      185 │     render(): React.DOMElement<{
          ╵                                ^

```
