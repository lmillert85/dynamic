import { ITemplate, ITemplateElement } from '@dynamic/@types/template.interface';
import {
	PropsWithChildren,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState
} from 'react';
import { ICampaign } from '@dynamic/services/interface';

interface ICampaignContextProps {
	activeCampaign: number | null;
	campaign: Array<ICampaign>;
	currentPage: number;
	printing: boolean;
	selectedFormat: number;
	handleChangeCampaign: (context: Array<ICampaign>) => void;
	handleChangeActiveCampaign: (context: number | null) => void;
	setCurrentPage: (context: number) => void;
	setPrinting: (context: boolean) => void;
	setSelectedFormat: (context: number) => void;
}

const CampaignContext = createContext(
	{} as ICampaignContextProps
);

const CampaignDataProvider = ({ children }: PropsWithChildren) => {
	const [activeCampaign, setActiveCampaign] = useState<number | null>(null);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [printing, setPrinting] = useState<boolean>(false);
	const [campaign, setCampaign] = useState<Array<ICampaign>>([]);
    const [selectedFormat, setSelectedFormat] = useState<number>(0);

	const handleChangeCampaign = useCallback(
		(context: Array<ICampaign>) => {
			setCampaign(context);
		},
		[]
	);
	const handleChangeActiveCampaign = useCallback(
		(context: number | null) => {
			setActiveCampaign(context);
		},
		[]
	);

	const campaignMemoized = useMemo(
		() => ({ campaign, handleChangeCampaign, activeCampaign, handleChangeActiveCampaign, currentPage, setCurrentPage, printing, setPrinting, selectedFormat, setSelectedFormat }),
		[ campaign, handleChangeCampaign, activeCampaign, handleChangeActiveCampaign, currentPage, setCurrentPage, printing, setPrinting, selectedFormat, setSelectedFormat ]
	);
	return (
		<CampaignContext.Provider value={campaignMemoized}>
			{children}
		</CampaignContext.Provider>
	);
};


const useCampaign = () => {
	const context = useContext(CampaignContext);
	return context;
};

export { CampaignDataProvider, useCampaign };
