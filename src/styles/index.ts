import {View} from 'react-native';
import {styled} from 'styled-components';

const HorizontalWrapper = styled(View)<{justify?: string}>`
  flex-direction: row;
  align-items: center;
  justify-content: ${props => (props.justify ? props.justify : 'center')};
`;

const CenterContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export {HorizontalWrapper, CenterContainer};
