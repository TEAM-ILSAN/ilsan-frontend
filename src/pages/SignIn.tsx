import Button from '@/components/Button';
import StartingChatInput from '@/components/StartingChatInput';
import { ChangeEvent, useEffect, useState } from 'react';

const isName = /^[가-힣]{2,30}$/;
const isGender = /^(?:male|female)$/;

// 카카오 로그인 cors error 해결 중인 관계로 일단 더미데이터로 구현합니다.
const dummyRes = {
  user_info: {
    id: 2251300871,
    connected_at: '2022-05-21T06:30:34Z',
    properties: { nickname: '\uc774\uc870\uc740' },
    kakao_account: {
      profile_nickname_needs_agreement: false,
      profile: { nickname: '\uc774\uc870\uc740' },
      has_email: true,
      email_needs_agreement: false,
      is_email_valid: true,
      is_email_verified: true,
      email: 'joyfuljoeunlee@gmail.com',
      has_gender: true,
      gender_needs_agreement: false,
      gender: 'female',
    },
  },
  access_token: 'WHYBJC17lSZl_-oyjfsMyNwRD9_ANvunN1ctYSv7CilvuQAAAYEtbAFi',
};

const SignIn = () => {
  const [inputFocus, setInputFocus] = useState(0);
  const [name, setName] = useState({ value: dummyRes.user_info.properties.nickname, isValid: false });
  const [gender, setGender] = useState({ value: dummyRes.user_info.kakao_account.gender || '', isValid: false });

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    if (id === 'name') {
      setName({ ...name, value });
    } else if (id === 'gender') {
      setGender({ ...gender, value });
    }
  };

  const changeIsValid = (id: string, isValid: boolean) => {
    if (id === 'name') {
      setName({ ...name, isValid });
    } else if (id === 'gender') {
      setGender({ ...gender, isValid });
    }
  };

  const verifyInput = (isRegExp: RegExp, value: string) => {
    return isRegExp.test(value);
  };

  useEffect(() => {
    changeIsValid('name', verifyInput(isName, name.value));
  }, [name.value]);

  useEffect(() => {
    changeIsValid('gender', verifyInput(isGender, gender.value));
  }, [gender.value]);

  return (
    <>
      <StartingChatInput
        id="name"
        value={name.value}
        title="이름"
        placeHolder="이름"
        isValid={name.isValid}
        onChange={changeValue}
      />
      <StartingChatInput
        id="gender"
        value={gender.value}
        title="성별"
        placeHolder="성별"
        isValid={gender.isValid}
        onChange={changeValue}
      />
      <Button text="다음" isDisabled={!name.isValid} />
    </>
  );
};

export default SignIn;
