import Button from '@/components/Button';
import StartingChatInput from '@/components/StartingChatInput';
import styled from '@emotion/styled';
import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const isName = /^[가-힣]{2,30}$/;
const isGender = /^(?:male|female)$/;

const totalStep = 3;

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
  const [searchParams, setSearchParams] = useSearchParams();
  const step = parseInt(searchParams.get('step'));

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

  const goToStep = (number: number) => {
    if (number > totalStep) {
      return;
    }

    setSearchParams({ step: `${number}` });
  };

  useEffect(() => {
    changeIsValid('name', verifyInput(isName, name.value));
  }, [name.value]);

  useEffect(() => {
    changeIsValid('gender', verifyInput(isGender, gender.value));
  }, [gender.value]);

  return (
    <>
      <StepContainer>
        {new Array(totalStep).fill(null).map((element, index) => {
          const currentStep = index + 1;
          return (
            <Step key={currentStep} onClick={() => goToStep(currentStep)}>
              {currentStep}
            </Step>
          );
        })}
      </StepContainer>
      <InputContainer>
        {step === 1 && (
          <StartingChatInput
            id="name"
            value={name.value}
            title="이름"
            placeHolder="이름"
            isValid={name.isValid}
            onChange={changeValue}
          />
        )}
        {step === 2 && (
          <StartingChatInput
            id="gender"
            value={gender.value}
            title="성별"
            placeHolder="성별"
            isValid={gender.isValid}
            onChange={changeValue}
          />
        )}
        {step === 3 && (
          <StartingChatInput
            id="location"
            value={gender.value}
            title="활동지역"
            placeHolder="활동지역"
            isValid={gender.isValid}
            onChange={changeValue}
          />
        )}
      </InputContainer>
      <Button text="다음" isDisabled={!name.isValid} onClick={() => goToStep(step + 1)} />
    </>
  );
};

export default SignIn;

const StepContainer = styled.div`
  display: flex;
`;

const InputContainer = styled.div``;

const Step = styled.button`
  padding: 10px;
  background: black;
  color: white;
`;
