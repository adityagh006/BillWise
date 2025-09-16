"use client";

import { getTemporaryAccessToken } from '@/actions/getTemporaryAccessToken';
import { SchematicEmbed } from '@schematichq/schematic-components';
import React, { useEffect, useState } from 'react';

export default function SchematicComponent({ componentId }: { componentId?: string }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    if (!componentId) return;

    const fetchToken = async () => {
      const token = await getTemporaryAccessToken();
      setAccessToken(token);
    };

    fetchToken();
  }, [componentId]);

  if (!componentId) return null;
  if (!accessToken) return null;

  return <SchematicEmbed accessToken={accessToken} id={componentId} />;
}
