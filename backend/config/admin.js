module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '154651ef3599aa73a75d44df1c65de5e'),
  },
});
