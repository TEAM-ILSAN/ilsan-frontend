import { isGender } from '@/constants/common';
import { verifyInput } from '@/utils/verifyInput';
import { ChangeEvent, useEffect, useState } from 'react';
import { Input } from '../common';
import { userInfoMock } from './__mocks__/userInfoMock';

const Gender = () => {
  const [gender, setGender] = useState({ value: userInfoMock.user_info.kakao_account.gender || '', isValid: false });

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setGender({ ...gender, value });
  };

  const changeIsValid = (isValid: boolean) => {
    setGender({ ...gender, isValid });
  };

  useEffect(() => {
    changeIsValid(verifyInput(isGender, gender.value));
  }, [gender.value]);

  return (
    <Input
      id="gender"
      value={gender.value}
      title="성별"
      placeHolder="성별"
      isValid={gender.isValid}
      onChange={changeValue}
    />
  );
};

export default Gender;
