import Link from 'next/link'

export const metadata = {
  title: 'Internal Sliding Door Kits | Coming Soon | DoorMate',
  description: 'DoorMate internal sliding door kits — coming soon. Aluminium and stainless steel systems for internal use. Contact us for more information.',
}

export default function InternalSlidingKitsPage() {
  return (
    <div className="max-w-site mx-auto px-5 xl:px-16 py-20 text-center">
      <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-4">COMING SOON</p>
      <h1 className="text-brand-navy text-4xl font-bold mb-4">Internal Sliding Door Kits</h1>
      <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
        Our internal aluminium and stainless steel sliding door kits are coming soon. Contact us to register your interest or discuss your project.
      </p>
      <Link href="/contact" className="inline-block bg-brand-navy text-white text-sm font-bold tracking-widest px-8 py-4 hover:bg-brand-gold hover:text-brand-navy transition-colors">
        CONTACT US
      </Link>
    </div>
  )
}
