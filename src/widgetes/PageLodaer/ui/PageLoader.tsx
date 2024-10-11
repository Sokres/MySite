import { classNames } from 'shared/lib/classNaame/ClassName';
import { Loader } from 'shared/ui/Loader/Loader';
import cl from './PageLoader.module.css';

interface PageLoaderProps {
className?: string;
}
export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cl.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
