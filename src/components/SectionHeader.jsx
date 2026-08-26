import React from 'react';

export default function SectionHeader({
  badge,
  badgeType = 'default', // 'default', 'red', 'light'
  title,
  subtitle,
  centered = true,
  theme = 'light' // 'light' or 'dark'
}) {
  const isDark = theme === 'dark';

  return (
    <div className={`mb-5 ${centered ? 'text-center' : ''} ${isDark ? 'text-white' : ''}`}>
      {badge && (
        <div>
          <span
            className={`eyebrow-badge ${
              badgeType === 'red'
                ? 'eyebrow-red'
                : badgeType === 'light'
                ? 'eyebrow-light'
                : ''
            }`}
          >
            {badge}
          </span>
        </div>
      )}
      <h2
        className={`fw-bold mb-3 ${isDark ? 'text-white' : 'text-dark'}`}
        style={{ letterSpacing: '-0.02em', color: isDark ? '#ffffff' : 'var(--text-dark-primary)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`lead mx-auto ${isDark ? 'text-light' : 'text-secondary'}`}
          style={{
            maxWidth: '720px',
            fontSize: '1.05rem',
            lineHeight: '1.65',
            color: isDark ? '#f1f5f9' : 'var(--text-dark-body)'
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
