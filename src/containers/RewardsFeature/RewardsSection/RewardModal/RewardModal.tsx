import React from 'react';
import {
  Button, Input, Modal, Textarea,
} from 'src/components';
import { RewardModalContent } from './RewardModal.styled';

interface Props {
  show: boolean;
  close: () => void;
}

export const RewardModal:React.FC <Props> = ({ show, close }) => (
  <Modal show={show} close={() => close()}>
    <RewardModalContent>
      <Input name="to" label="To" placeholder="Alex Brown" />
      <Input name="reward" label="Reward" placeholder="30" />
      <Textarea name="why" label="Why?" />
      <Button type="button">Reward</Button>
    </RewardModalContent>
  </Modal>
);
