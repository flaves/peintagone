import React from 'react';

export default interface Company {
  address?: string | React.ReactNode;
  email?: string | null;
  phone?: string | null;
  schedule?: string | React.ReactNode;
}
