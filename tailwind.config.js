/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        theme: {
          surface: 'var(--surface-glass)',
          'surface-hover': 'var(--surface-glass-hover)',
          'surface-subtle': 'var(--surface-glass-subtle)',
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          canvas: '#020617',    // خلفية أعمق
          base: '#0f172a',      // لونك المعتمد
          card: '#1e293b',      // بطاقة أساسية
          hover: '#334155',     // تفاعل الحقول
          marine: '#0c1e3d',    // نمط ممطر
          storm: '#1e1b4b',
        },
        weather: {
          canvas: '#EBF3FA',       // خلفية التطبيق العامة
          glass: 'rgba(255, 255, 255, 0.45)', // الزجاج الأساسي
          glassNested: 'rgba(255, 255, 255, 0.65)', // الكروت الداخلية
          border: 'rgba(255, 255, 255, 0.6)', // حدود اللمعان
          darkGlass: 'rgba(15, 23, 42, 0.55)', // زجاج النمط الليلي
          sun: '#F59E0B',          // برتقالي دافئ
          rain: '#0EA5E9',         // أزرق مائي
        }
      },
      borderColor: {
        theme: {
          glass: 'var(--border-glass)',
          'glass-hover': 'var(--border-glass-hover)',
          focus: 'var(--border-glass-focus)',
        },
      },
      boxShadow: {
        'theme-glass': 'var(--shadow-glass)',
        'theme-focus': 'var(--focus-ring-glow)',
      },
    },
  },
}