import React, { useState } from 'react';
import { ERROR_EMAIL_NOT_VALID } from '@utils/textConstants';
import { SvgSpinner } from 'app/icons/Icons';
import { Button } from 'designSystem/Buttons/Buttons';
import { Container, Flex } from 'designSystem/Layouts/Layouts';

import { SearchBarProps } from '../../utils/props';

const SearchUser: React.FC<SearchBarProps> = ({
  email,
  handleFieldChange,
  handleCheckUser,
  errors,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await handleCheckUser();
    setIsLoading(false);
  };

  return (
    <Container>
      <Flex layout="col-center">
        <div>
          <Flex layout="row-left">
            <input
              onChange={event => handleFieldChange(event, 'email')}
              type="email"
              value={email}
              name="emailSearch"
              placeholder="Introduce tu teléfono, email o DNI"
              className="border rounded-lg px-4 py-2 mr-4 min-w-[300px] text-hg-black"
            />
            <Button size="sm" isSubmit onClick={handleClick} type="tertiary">
              {isLoading ? <SvgSpinner height={24} width={24} /> : 'Buscar'}
            </Button>
          </Flex>
          {errors.includes(ERROR_EMAIL_NOT_VALID) && (
            <p className="text-red-500 text-left text-sm ml-2 mt-2">
              {ERROR_EMAIL_NOT_VALID}
            </p>
          )}
        </div>
      </Flex>
    </Container>
  );
};
export default SearchUser;
