'use client';

import React, { useEffect, useState } from 'react';
import { useMessageSocket } from '@components/useMessageSocket';
import { CrisalixUser } from '@interface/crisalix';
import { MessageType } from '@interface/messageSocket';
import MainLayout from 'app/components/layout/MainLayout';
import { useGlobalPersistedStore } from 'app/stores/globalStore';
import { HOLAGLOW_COLORS } from 'app/utils/colors';
import { Title, Underlined } from 'designSystem/Texts/Texts';

import { useCrisalix } from '../crisalix/useCrisalix';
import DashboardMenuItem from './DashboardMenuItem';
import { menuItems } from './MenuItems';

const Page = () => {
  const [username, setUserName] = useState('');
  const [flowwwToken, setFlowwwToken] = useState('');
  const messageSocket = useMessageSocket(state => state);
  const userCrisalix = useCrisalix(state => state);
  const { remoteControl, setCheckSimulator } = useGlobalPersistedStore(
    state => state
  );

  useEffect(() => {
    const storedUsername = localStorage.getItem('username') || '';
    const storedFlowwwtoken = localStorage.getItem('flowwwToken') || '';
    setUserName(storedUsername);
    setFlowwwToken(storedFlowwwtoken);
    setCheckSimulator(false);
  }, []);

  useEffect(() => {
    if (!remoteControl) {
      const existsMessageCrisalixUser: any = messageSocket.messageSocket.filter(
        x => x.messageType == MessageType.CrisalixUser
      );
      if (existsMessageCrisalixUser.length > 0) {
        const crisalixUser = existsMessageCrisalixUser[0];
        const data = {
          ClinicId: crisalixUser.ClinicId,
          BoxId: crisalixUser.BoxId,
          id: crisalixUser.id,
          playerId: crisalixUser.playerId,
          playerToken: crisalixUser.playerToken,
        };
        saveCrisalixUser(data);
        messageSocket.removeMessageSocket(existsMessageCrisalixUser[0]);
      }
    }
  }, [messageSocket]);

  async function saveCrisalixUser(props: any) {
    const crisalixUser: CrisalixUser = {
      id: props.id,
      playerId: props.playerId,
      playerToken: props.playerToken,
      name: props.name,
    };
    userCrisalix.addCrisalixUser(crisalixUser);
  }

  return (
    <MainLayout isDashboard hideContactButtons hideProfessionalSelector>
      {username && (
        <div className="mt-8">
          <Title className="text-xl mb-4">Tu glow, tus normas</Title>
          <Title className="font-bold text-5xl mb-8">
            ¡Hola{' '}
            <Underlined color={HOLAGLOW_COLORS['primary']}>
              {username}
            </Underlined>
            !
          </Title>
          <div className="grid grid-cols-3 mb-12">
            {menuItems.map(item => (
              <DashboardMenuItem
                key={item.title}
                iconSrc={item.iconSrc}
                altText={item.altText}
                title={item.title}
                link={
                  item.link.includes('flowwwToken')
                    ? item.link.replace('flowwwToken', flowwwToken)
                    : item.link
                }
                target={item.target}
              />
            ))}
          </div>
        </div>
      )}
    </MainLayout>
  );
};
export default Page;
