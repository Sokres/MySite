import { classNames } from 'shared/lib/classNaame/ClassName';
import cl from './PageLoader.module.css';
import { Loader } from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
className?: string;
}
export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(cl.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};