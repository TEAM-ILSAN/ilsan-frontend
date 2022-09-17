import modalListAtom from '@/atoms/modalList/atom';
import ModalPortal from '@/components/ModalPortal';
import SelectableModal from '@/components/ModalPortal/SelectableModal';
import useModal from '@/hooks/useModal';
import { ChangeEvent, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Layout } from '@/components/common';
import { Input } from '@/components/common';

const categories = [
  '커피챗',
  '운동',
  '산책',
  '반려동물',
  '취미모임',
  '게임',
  '스터디',
  '술자리',
  '밥친구',
  '커리어',
  '동네정보',
  '재테크',
];

const ChatRoomDescription = () => {
  const [inputs, setInputs] = useState({ category: '', name: '', description: '' });

  const { openModal, closeModal } = useModal();

  const isModalActivated = useRecoilValue(modalListAtom).includes('selectableModal');

  const showSelectableModal = () => {
    openModal('selectableModal');
  };

  const changeInput = (event: ChangeEvent) => {
    const { id, value } = event.target as HTMLInputElement;
    setInputs({ ...inputs, [id]: value });
  };

  const selectCategory = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setInputs({ ...inputs, category: value });
    closeModal();
  };

  return (
    <Layout>
      <Input id="category" value={inputs.category} title="주제" readOnly isSelectable onClick={showSelectableModal} />
      <Input id="name" value={inputs.name} title="방 이름" placeHolder="방 이름" onChange={changeInput} />
      <Input
        id="description"
        value={inputs.description}
        title="방 설명"
        placeHolder="어떤 방인지 알려주세요"
        onChange={changeInput}
      />
      {isModalActivated && (
        <ModalPortal>
          <SelectableModal title="주제" name="category" onChange={selectCategory}>
            {categories}
          </SelectableModal>
        </ModalPortal>
      )}
    </Layout>
  );
};

export default ChatRoomDescription;
