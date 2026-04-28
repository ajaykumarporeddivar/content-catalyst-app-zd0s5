'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { clsx } from 'clsx';
import { merge } from 'tailwind-merge';
import { HiOutlineCog, HiOutlineUser } from 'lucide-react';
import { cn } from './ui';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  href?: string;
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  children,
  className,
  href,
  ...props
}) => {
  const classes = cn(
    'flex justify-center items-center',
    {
      'bg-primary text-white hover:bg-primary-dark': variant === 'primary',
      'bg-secondary text-white hover:bg-secondary-dark': variant === 'secondary',
      'bg-white border border-primary text-primary hover:bg-primary-dark': variant === 'outline',
      'bg-transparent border border-white text-white hover:bg-primary-dark': variant === 'ghost',
    },
    {
      'text-xs py-1 px-2': size === 'sm',
      'text-sm py-2 px-4': size === 'md',
      'text-lg py-3 px-6': size === 'lg',
    },
    {
      'cursor-not-allowed opacity-50': disabled,
    },
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {children}
    </button>
  );
};

interface CardProps {
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
}

const CardHeader: FC<CardHeaderProps> = ({ children }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
}

const CardTitle: FC<CardTitleProps> = ({ children }) => {
  return (
    <h2 className="text-lg font-bold">{children}</h2>
  );
};

interface CardContentProps {
  children: React.ReactNode;
}

const CardContent: FC<CardContentProps> = ({ children }) => {
  return (
    <div className="mb-4">
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
}

const CardFooter: FC<CardFooterProps> = ({ children }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      {children}
    </div>
  );
};

interface BadgeProps {
  variant: 'default' | 'success' | 'warning' | 'error' | 'info';
  children: React.ReactNode;
}

const Badge: FC<BadgeProps> = ({ variant, children }) => {
  const classes = cn(
    'px-2 py-1 text-xs rounded-md',
    {
      'bg-green-100 text-green-600': variant === 'success',
      'bg-yellow-100 text-yellow-600': variant === 'warning',
      'bg-red-100 text-red-600': variant === 'error',
      'bg-blue-100 text-blue-600': variant === 'info',
      'bg-gray-100 text-gray-600': variant === 'default',
    }
  );

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: 'text' | 'email' | 'password';
  icon?: React.ReactNode;
}

const Input: FC<InputProps> = ({ label, placeholder, value, onChange, error, type = 'text', icon }) => {
  const classes = cn(
    'block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary',
    {
      'border-red-500': error,
    }
  );

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="relative">
        {icon && (
          <div className="absolute left-0 top-0 ml-3 mt-3">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={classes}
        />
      </div>
      {error && (
        <div className="text-red-500 text-xs mt-2">{error}</div>
      )}
    </div>
  );
};

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

const Spinner: FC<SpinnerProps> = ({ size = 'md' }) => {
  const classes = cn(
    'border-4 border-gray-200 border-t-gray-600 rounded-full',
    {
      'w-4 h-4': size === 'sm',
      'w-8 h-8': size === 'md',
      'w-12 h-12': size === 'lg',
    }
  );

  return (
    <div className={classes} />
  );
};

interface AvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  bgColor?: string;
}

const Avatar: FC<AvatarProps> = ({ name, size = 'md', bgColor }) => {
  const classes = cn(
    'flex justify-center items-center text-white rounded-full',
    {
      'w-8 h-8 text-xs': size === 'sm',
      'w-12 h-12 text-lg': size === 'md',
      'w-16 h-16 text-xl': size === 'lg',
    },
    bgColor && `bg-${bgColor}-500`
  );

  return (
    <div className={classes}>
      {name[0].toUpperCase()}
    </div>
  );
};

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white shadow-md rounded-md p-4 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
}

const StatCard: FC<StatCardProps> = ({ title, value, change, changeType, icon }) => {
  const classes = cn(
    'flex justify-between items-center p-4 border border-gray-300 rounded-md',
    {
      'bg-green-100': changeType === 'up',
      'bg-red-100': changeType === 'down',
      'bg-gray-100': changeType === 'neutral',
    }
  );

  return (
    <div className={classes}>
      <div className="flex justify-center items-center mr-4">
        {icon}
      </div>
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{value}</p>
        <p className="text-sm text-gray-500">{change}</p>
      </div>
    </div>
  );
};

export {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Badge,
  Input,
  Spinner,
  Avatar,
  Modal,
  StatCard,
};