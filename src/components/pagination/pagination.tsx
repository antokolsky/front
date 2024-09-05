import cn from "classnames";
import style from "./pagination.module.scss";
import {
	FC,
	DetailedHTMLProps,
	HTMLAttributes,
	PropsWithChildren,
	useEffect,
	useState,
} from "react";
import { useSearchParams } from "react-router-dom";
interface Props
	extends PropsWithChildren<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	> {
	pages: number;
}

const Pagination: FC<Props> = (props) => {
	const { className, pages, ...rest } = props;
	const getSearchPage = (state: URLSearchParams) => {
		return state.get("page");
	};
	const createSerchPage = (page: string | number) => {
		return new URLSearchParams({ page: String(page) });
	};
	const paginationCn = cn(style.pagination, className);

    const [searchParams, setSearchParams] = useSearchParams();


	const [pagesAction, setPagesAction] = useState(
		createPagesPagination(searchParams)
	);
	function createPagesPagination(searchParams: URLSearchParams) {
		const pagesActions = Array(pages)
			.fill(null)
			.map((_, i) => {
				return {
					action:
						getSearchPage(searchParams) === String(i + 1)
							? true
							: false,
					value: i+1,
				};
			});
		const actionIndex = pagesActions.findIndex((v) => v.action);
		if (actionIndex <= 2) {return pagesActions.slice(0, 5);}
		if (actionIndex + 1 >= pages-2){
			return pagesActions.slice(pages - 5, pages);}

		return pagesActions.slice(actionIndex - 2, actionIndex + 3);
	}
	useEffect(() => {
		if (getSearchPage(searchParams) === null) {
			setSearchParams(createSerchPage(1),{replace: true});
			setPagesAction(createPagesPagination(createSerchPage(1)));

		}
	}, []);
	const onActionSearch = (num: number) => {
		setSearchParams(createSerchPage(num));
		setPagesAction(createPagesPagination(createSerchPage(num)));
	};
	return (
		<div className={paginationCn} {...rest}>
			<button
            className={cn(style.left,style.leftAndRight,style.button)}
				onClick={() => {
					onActionSearch(1);
				}}
			>
			</button>
			{pagesAction.map((v) => {
   
                
                return (
				<button
					className={
                        cn( style.button,v.action === true ? style.selected : style.noSelected)
					}
					onClick={() => {
						onActionSearch(v.value);
					}}
				>
					{v.value}
				</button>
			)})}
			<button
             className={cn(style.right,style.leftAndRight,style.button)}
				onClick={() => {
					onActionSearch(pages);
				}}
			>
			</button>
		</div>
	);
};
export default Pagination;
