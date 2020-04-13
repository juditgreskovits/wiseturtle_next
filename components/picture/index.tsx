import React from 'react';
import styled from 'styled-components';
import Lazyload from 'react-lazyload';

// we will need to know whether our images are horizontal or vertical

type aspectRatio = 'wide' | 'square';

interface SrcSet {
  srcset: string;
  media?: string;
  sizes?: string;
}

interface PictureData {
  id: string;
  sources: SrcSet[];
  src: string;
  alt: string;
  aspectRatio: aspectRatio;
}

interface PictureProps {
  data: PictureData;
  lazyload?: boolean;
}

const getHeightPercentage = (aspectRatio: aspectRatio) => {
  switch (aspectRatio) {
    case 'wide':
      return `${(9 * 100) / 16}%`;
    default:
      return '100%';
  }
};

const StyledImage = styled.img<{ aspectRatio: aspectRatio }>`
  width: 100%;
  background-color: ${({ theme }) => theme.secondaryBackground};
`;

const StyledPlaceholder = styled.div<{ aspectRatio: aspectRatio }>`
  background-color: ${({ theme }) => theme.secondaryBackground};
  width: 100%;
  padding-top: ${({ aspectRatio }) => getHeightPercentage(aspectRatio)};
`;

const Picture = ({ data, lazyload }: PictureProps) => {
  const sources = data.sources.map((source, index) => (
    <source key={`${data.id}-picture-${index}`} srcSet={source.srcset} media={source.media} sizes={source.sizes} />
  ));

  let picture = (
    <picture>
      {sources}
      <StyledImage src={data.src} alt={data.alt} aspectRatio={data.aspectRatio} />
    </picture>
  );

  const placeholder = <StyledPlaceholder aspectRatio={data.aspectRatio} />;

  picture = lazyload ? (
    <Lazyload placeholder={placeholder} once>
      {picture}
    </Lazyload>
  ) : (
    picture
  );

  return <React.Fragment>{picture}</React.Fragment>;
};

// This function is v specific to how things are set up for me

const getPictureData = ({
  path,
  id,
  aspectRatio,
  alt = 'Photo of a kitchen',
}: {
  path: string;
  id: string;
  aspectRatio: aspectRatio;
  alt?: string;
}) => {
  const getSrc = (path: string, id: string, aspectRatio: aspectRatio, sizeName: string) =>
    `${path}${id}-${aspectRatio}-${sizeName}.jpg`;

  const srcset = [
    {
      name: 'large',
      width: 1800,
    },
    {
      name: 'medium',
      width: 1200,
    },
    {
      name: 'small',
      width: 600,
    },
  ]
    .map((size) => `${getSrc(path, id, aspectRatio, size.name)} ${size.width}w`)
    .join(',');

  const src = getSrc(path, id, aspectRatio, 'large');

  return {
    id,
    sources: [
      {
        srcset,
      },
    ],
    src,
    alt,
    aspectRatio,
  };
};

export { Picture, getPictureData };
