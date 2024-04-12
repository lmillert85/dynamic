export interface IClients{
	name: string;
	logo: string;
	uuidv: string;
}

export interface ICampaign {
	uuidv: string,
	id: number,
    client: string,
    name: string,
    aproved: Array<number>,
    reproved: Array<number>,
    created: string,
	template: ITemplate | null,
	templateCols: Array<ITemplateElement>
    amount: number
}

export interface ITemplateElement {
    id: string;
    dinamico: boolean;
    tipo: 'b64' | 'text';
    font: string;
    value: string;
    key: string;
    imageName?: string;
}

export interface ICreative {
	elementos: Array<ITemplateElement>;
    aproved: boolean | null;
    uuidv: string
}

export interface IFeed {
    sheets: Array<ICreative>;
    uuidv: string
}

export interface ITemplate {    
    name: string,
    banner: string,
    width: string,
    height: string,
    elementos: Array<ITemplateElement>
}

export interface IAssets {    
    id: number;
    name: string;
    image: string;
    type: string;
    updatedAt: string;
    size: string;
}

export interface IUpdateFeed {
    row: number;
    column: number;
    value: string;
    imageName: string | null;
    uuidv: string;
}