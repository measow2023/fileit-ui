/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PageTitle from './PageTitle';

interface PageProps {
  title?: string;
  children: React.ReactNode;
}

const containerStyle = css`
  margin: 1rem auto;
  width: 100%;
  max-width: 600px;
`;

const contentWrapperStyle = css`
  width: 100%;
  max-width: 600px;
`;

const Page: React.FC<PageProps> = ({ title, children }: PageProps) => (
  <div css={containerStyle}>
    {title && <PageTitle>{title}</PageTitle>}
    <div css={contentWrapperStyle}>{children}</div>
  </div>
);

export default Page;
