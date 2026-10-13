import { ORG_NAME } from '@lobechat/business-const';
import { type LobeHubProps } from '@lobehub/ui/brand';
import { memo } from 'react';

export const OrgBrand = memo<LobeHubProps>(() => {
  return <span>{ORG_NAME}</span>;
});
