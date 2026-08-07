'use client';
import Smile from '@/assets/smile.svg';
import { ProfileSidebar } from '@/components/elements/profile/profile.data';
import { Link } from '@/i18n/navigation';
import { saveProfile } from '@/lib/actions/profile';
import { TProfile } from '@/lib/db/types';
import { useState } from 'react';

interface Props {
  profile: TProfile;
  email: string;
}

export default function Profile({ profile, email }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(profile?.fullName ?? '');
  const [birthDate, setBirthDate] = useState(profile?.birthDate ?? '');
  const [gender, setGender] = useState(profile?.gender ?? '');
  const [phone, setPhone] = useState(profile?.phone ?? '');
  return (
    <div className="grid grid-cols-[1fr_4fr] gap-5 my-10">
      <div className="bg-background rounded-3xl p-6">
        {Object.entries(ProfileSidebar).map(([section, items]) => (
          <div key={section} className="mb-4 last:mb-0">
            <h3 className="mb-4 text-sm text-[#070707] font-bold">
              {section}
            </h3>

            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-sm text-[#070707] hover:underline"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          ))}
      </div>
      <div className="bg-background rounded-3xl p-6 pr-100">
        <div className="flex items-start gap-5">
          <Smile className="w-10 h-10" />
          <div className="flex flex-col gap-3 justify-start">
            <span className="text-xl font-bold">Учётные данные</span>
            <span className="text-[#001a33]/60 font-normal text-base">
              Вы можете менять свои личные данные, подтверждать почту, управлять аккаунтом и
              настройками безопасности в защищённом сервисе{' '}
              <span className="text-primary">Ozon ID</span>
            </span>
            <div className="flex mt-5 gap-30">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col">
                  <span className="text-xs text-[#001a33]/60">ФИО</span>

                  <input
                    disabled={!isEditing}
                    className="mt-1 focus:border-primary w-full rounded-lg border border-gray-200 p-2 disabled:bg-white disabled:text-[#070707]"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#001a33]/60">Дата рождения</span>
                  <input
                    type="date"
                    disabled={!isEditing}
                    className="mt-1 w-full rounded-lg border focus:border-primary border-gray-200 p-2 disabled:bg-white"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#001a33]/60">Пол</span>
                  <select
                    disabled={!isEditing}
                    className="mt-1 w-full rounded-lg border focus:outline-none focus:border-primary border-gray-200 p-2 disabled:bg-white"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}>
                    <option value="">Выберите</option>
                    <option value="Мужской">Мужской</option>
                    <option value="Женский">Женский</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-col gap-7'>
                <div className="flex flex-col">
                  <span className="text-xs text-[#001a33]/60">Телефон</span>

                  <input
                    disabled={!isEditing}
                    className="mt-1 w-full rounded-lg border focus:border-primary border-gray-200 p-2 disabled:bg-white disabled:text-[#070707]"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#001a33]/60">Почта</span>
                  <span className="text-base text-[#070707]">{email}</span>
                </div>
              </div>
            </div>
            {!isEditing ? (
                <button 
                 className='bg-primary w-60 mt-5 hover:bg-primary/90 text-white font-semibold text-base rounded-2xl p-2'
                onClick={() => setIsEditing(true)}>Изменить</button>
              ) : (
                <button 
                  className='bg-primary w-60 mt-5 hover:bg-primary/90 text-white font-semibold text-base rounded-2xl p-2'
                  onClick={async () => {
                    await saveProfile({
                      fullName,
                      birthDate,
                      gender,
                      phone,
                    });

                    setIsEditing(false);
                  }}>
                  Сохранить
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
